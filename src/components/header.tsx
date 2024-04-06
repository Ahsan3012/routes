import React from "react";
import Link from "next/link";

export default function header(){
    return(
        <div className="flex bg-blue-600 p-5 gap-4">
            <Link href="/">Home</Link>
            <Link href="/Dashboard">Dashbord</Link>
            <Link href="/Dashboard/side-one">Side One</Link>
            <Link href="/Dashboard/side-two">Side two</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Settings">Settings</Link>
        </div>
    )
}