import React, { ChangeEvent, useTransition } from 'react'
import { useLocale } from 'next-intl'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const LocaleSwitcher = () => {

    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }
    return (
        <Select>
            <SelectTrigger className="w-fit border-0 ">
                <Button>Hi</Button>
            </SelectTrigger>
            <SelectContent defaultValue={localActive}>
                <SelectGroup onChange={() => { }}>
                    <SelectLabel>Choose the languages</SelectLabel>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="kh">Khmer</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default LocaleSwitcher