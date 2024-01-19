//object creation
const studentProfile={
    name:"Deniz",
    age:20,
    course:"Javascript",
    hobbies:["volleyball","films","drawing"]
}

console.log(studentProfile)

//deleting a property
delete studentProfile.course
console.log(studentProfile)

//destructuring
const {name:studentName, age, ...rest}=studentProfile
console.log(studentName, age, rest)

//array
const grades=[98,95,91,89, 87]
console.log(grades[0]+ "\n"+ grades[1])

//combining objects
 const additionalInfo={
    address:"Baku",
    phoneNumber:"+994 234234"
 }

const completeProfile={...studentProfile,...additionalInfo}
console.log(completeProfile)


