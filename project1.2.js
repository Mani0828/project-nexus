document.getElementById('signupForm').addEventListener('submit', function (e) 
{
    e.preventDefault();   
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    this.submit();
});
