// Object creation

const employeeDetails = {
    fullname: "Deniz Aliyeva",
    position: "Developer",
    yearsofExperience: 2,
    skills: ["problem solving", "analytical thinking"],
    contact: {
        email: "abc@gmail.com",
        phone: "+994 123134234"
    }
};

console.log(employeeDetails);

// Deleting a property
delete employeeDetails["contact"]["email"];
console.log(employeeDetails);

// Adding a new property
employeeDetails.department = "IT";
console.log(employeeDetails);

// Destructuring
const { fullname: employeeName, position, contact, ...rest } = employeeDetails;
console.log(employeeName + "," + position + ",", contact);
console.log(rest);

// Array of objects
const projectScores = [
    { projectId: 456, score: 787 },
    { projectId: 232, score: 765 }
];
console.log("ID of the first project:",projectScores[0]["projectId"]);
console.log("Score of the first project:",projectScores[0]["score"]);

// Merging objects
const personalInfo = {
    homeAddress: "Baku",
    emergencyContact: "+994 234234",
    maritalStatus: "married"
};

const completeProfile = { ...employeeDetails, ...personalInfo };
console.log(completeProfile);
