import { User } from "./user.model";

export const createUserToDb = async () => {
  const user = new User({
    id: "sfash32243223479dsf",
    role: "student",
    password: "4234",
    name: {
      firstName: "Ahsan",
      middleName: "Habib",
      lastName: "Sowmik",
    },
    dateOfBirth: "01-01-1800",
    gender: "male",
    email: "ahsan@habib.com",
    contactNo: "4234234234",
    emergencyContactNo: "423423423",
    presentAddress: "Bhurungamari, Kurigram",
    permanentAddress: "Bhurungamari, Kurigram",
  });
  await user.save();
  return user;
};
