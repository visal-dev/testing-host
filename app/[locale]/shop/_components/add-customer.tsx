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
import { useTranslations } from "next-intl"

const AddCustomer = () => {

    const t = useTranslations('PaymentHeader')

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><UserPlus size={20} /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t('createCustomer')}</DialogTitle>
                    <DialogDescription>
                        {t('createCustomerDescription')}
                    </DialogDescription>
                </DialogHeader>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>{t('firstName')}</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>{t('lastName')}</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='font-medium'>{t('email')}</Label>
                    <Input
                        className='border p-3 outline-none rounded-md'
                        type="email" />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>{t('telephone')}</Label>
                        <Input
                            className='border p-3 outline-none rounded-md'
                            type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label className='font-medium'>{t('gender')}</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder={t('selectGender')} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>{t('gender')}</SelectLabel>
                                    <SelectItem value="male">{t('male')}</SelectItem>
                                    <SelectItem value="female">{t('female')}</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">{t('createCustomerButton')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCustomer