import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { UserPlus } from "lucide-react"

const AddCustomer = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><UserPlus size={20} /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a customer</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>First Name</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>Last Name</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='font-medium'>Email</Label>
                    <Input
                        className='border p-3 outline-none rounded-md'
                        type="email" />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>Telephone</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>Gender</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCustomer