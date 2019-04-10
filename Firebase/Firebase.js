import firebase from 'react-native-firebase';

class Fire {
    constructor() {
        this.init();

        this.observeAuth();
    }

    observeAuth = () => {
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    };

    onAuthStateChanged = user => {
        if (!user) {
            try {
                // 4.
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    get ref() {
        return firebase.database().ref('messages');
    };

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        // 1.
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        // 2.
        const timestamp = new Date(numberStamp);
        // 3.
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    }

    off() {
        this.ref.off();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    init = () =>
        firebase.initializeApp({
            apiKey: 'AIzaSyD2p5NTJKUeYUxg-0mmdiUOuNGihc3v88Y',
            authDomain: 'wingapp-491af.firebaseapp.com',
            databaseURL: 'https://wingapp-491af.firebaseio.com',
            projectId: 'wingapp-491af',
            storageBucket: 'wingapp-491af.appspot.com',
            messagingSenderId: '53535181336',
        });
}

export default Fire;