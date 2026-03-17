function Hello(){    //Dynamic Component
    let myName='Ajay';
    let num = 34;
    let fullName = () => "Ajay Sah";
    return <p>
        <h3>Hello {myName}! This is the future speaking.</h3>
        <h4>My Full Name is {fullName()} and I am {num} years old.</h4>
    </p>
}

export default Hello;