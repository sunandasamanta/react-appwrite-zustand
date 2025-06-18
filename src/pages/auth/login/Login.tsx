import { Description, Field, Input, Label } from "@headlessui/react";
import { useEffect, useState } from "react"
import clsx from "clsx"

// type FormValueTypes = {
//   username: string;
//   password: string;
// }

export default function Login() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // const [formValue, setFormValue] = useState<FormValueTypes>({
  //   username: "",
  //   password:""
  // })
  // useEffect(() => {
  //   setFormValue(prevValues => ({
  //     ...prevValues, 
  //   }))
  // }, [username, password])
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Name</Label>
        <Description className="text-sm/6 text-white/50">Use your real name so people will recognize you.</Description>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Name</Label>
        <Description className="text-sm/6 text-white/50">Use your real name so people will recognize you.</Description>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
      </Field>
    </div>
  )
}
