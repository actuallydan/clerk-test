import { auth, currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from 'next/navigation';

export default async function Welcome(){
    const { userId } = auth();
    // see if user exists already

    // const user = await prisma.findUnique({where: {id: userId}});

    // if(user){
    //     // if user with id already exists redirect to dashboard
    //     redirect("/dashboard")
    // }
    
    // // otherwise create the user and THEN redirect
    // let newUser = await prisma.create({data: {is: userId}});

    // if(newUser){
        redirect("/dashboard")
    // }

    return null;
}