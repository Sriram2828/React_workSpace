function Members(props) { //getting the props as an parameter from component1
    //destructuring the props
    const {behavior} = props
    const {father, mother, son, daughter} = behavior

    //using the props
    // const text1 = `${father}`;
    // const text2 = `${mother}`;
    const text3 = `${son}`;
    const text4 = `${daughter}`;
    return(
        <people>
            <ul>
                 <li>Father: Ram - {father} </li> {/* directly from the destructure */}
                <li>Mother: Seetha - {mother}</li>
                <li>Son: Lavan - {text3}</li> {/* creating a separate variable for the props */}
                <li>Daughter: Kaiyal - {text4}</li>
            </ul>
        </people>
    );
}
export default Members;
// this component is imported into the secondary component 1