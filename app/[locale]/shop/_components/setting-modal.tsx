import React, { ChangeEvent, useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings } from 'lucide-react'


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


const SettingModal = () => {

    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}/shop/chivanvisal`)
        })
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Settings />
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Shop</DialogTitle>
                    <DialogDescription>
                        Make changes to your shop here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="languages">Languages</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className='h-[300px]'>Make changes to your account here.</TabsContent>
                    <TabsContent className='h-[300px] space-y-3' value="languages">
                        <select name="" id="" onChange={onSelectChange} defaultValue={localActive}>
                            <option value="en">English</option>
                            <option value="kh">Khmer</option>
                        </select>
                    </TabsContent>
                </Tabs>

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SettingModal