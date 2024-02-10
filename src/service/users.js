import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export const getAll = () => {
 const users = fs.readFileSync(filePath);
 return JSON.parse(users);
}

export const getByEmail = (email) => {
    const users = getAll();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export const verifyPassword = async (password, hashPassword) => {
    const isValid = await bcrypt.compare(password, hashPassword);
    return isValid;
}

export const updatePassword = async ({email, password}) => {
    const users = getAll();
    const userFind = users.find((user) => user.email === email);
    if(!userFind) {
        throw new Error("User not found")
    }
    const newHashPassword = await bcrypt.hash(password, 12);
    userFind.password = newHashPassword;

    fs.writeFileSync(filePath, JSON.stringify(users))
}

export const userRegister = async (fName, email, password, gender) => {
    const users = getAll();
    const found = getByEmail(email);
    if(found) {
        throw new Error("User already exist")
    }
    const hashPassword = await bcrypt.hash(password, 12);
    users.push({
        id: users.length + 1,
        fName, gender, email, password: hashPassword
    })
    fs.writeFileSync(filePath, JSON.stringify(users))
    return {fName, email};
}