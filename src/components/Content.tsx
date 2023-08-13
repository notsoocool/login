'use client';
import { Input, Checkbox, Button } from "@nextui-org/react";
import React from "react";

export default function Content() {



	return (
	<div className=" py-10 sm:py-0 w-screen max-w-[1600px] h-auto bg-[#F6F8FA] overflow-x-hidden">
		<div className="flex w-full justify-center sm:gap-10">
			<div className="w-full sm:w-2/6 flex flex-col justify-center items-center sm:items-start gap-[5%]">
				<div className="flex flex-col items-center sm:items-start">
					<p className=" font-bold text-3xl sm:text-5xl">Welcome back</p>
					<p>Login to the Dashboard</p>
				</div>
					
				<div className="flex flex-col gap-5">
						<div>
							<Input
					
								clearable
								bordered
								shadow={false}								
								type="email"
								label="Email"
								placeholder="Enter your Email"
							/>
						</div>
							
						<div>
							<Input
						
								clearable
								bordered
								shadow={false}								
								type="password"
								label="Password"
								placeholder="Enter your Password"
							/>
						</div>
					
				</div>
				<div>
					<Checkbox><p className="">Remember me</p></Checkbox>
				</div>
				
				<div className="">
					<Button>LOGIN</Button>
				</div>
					
			</div>
			
			<div className=" hidden sm:flex w-3/6 h-screen justify-center">
				<img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
			</div>
		</div>
    </div>
	)
}
