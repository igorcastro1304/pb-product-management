import { Button } from "@material-tailwind/react";

export default function DefaultButton(props) {
    return (
        <Button className="bg-black text-yellow-400 p-2 rounded-sm" {...props}>{props.children}</Button>
    );

}