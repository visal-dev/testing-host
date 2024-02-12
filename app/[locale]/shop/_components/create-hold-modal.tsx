import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslations } from 'next-intl'
import React from 'react'

const CreateHoldModal = () => {
    const t = useTranslations('PaymentHeader')

    return (
        <Dialog>
            <DialogTrigger asChild className='w-full'>
                <Button size={'xl'} variant="outline">{t('holdButton')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t('createHold')}</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="">
                        <Label htmlFor="name" className="text-right">
                            {t('createHoldTitle')}
                        </Label>
                        <Input id="name" className="py-5" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateHoldModal