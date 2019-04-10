// 1.
get ref() {
    return firebase.database().ref('messages');
}
// 2.
on = callback =>
    this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));
// 3.
parse = snapshot => {
}
// 4.
off() {
    this.ref.off();
}