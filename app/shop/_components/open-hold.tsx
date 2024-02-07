import React, { Fragment, useState } from 'react'
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
import { Button } from '@/components/ui/button'
import { PackageOpen, Trash } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

const HOLD_ITEMS = [
    {
        id: 1,
        label: 'Item 1',
    },
    {
        id: 2,
        label: 'Item 1',
    },
    {
        id: 3,
        label: 'Item 1',
    },
    {
        id: 4,
        label: 'Item 1',
    },
    {
        id: 5,
        label: 'Item 1',
    },
    {
        id: 6,
        label: 'Item 1',
    },
    {
        id: 1,
        label: 'Item 1',
    },
    {
        id: 2,
        label: 'Item 1',
    },
    {
        id: 3,
        label: 'Item 1',
    },
    {
        id: 4,
        label: 'Item 1',
    },
    {
        id: 5,
        label: 'Item 1',
    },
    {
        id: 6,
        label: 'Item 1',
    },
    {
        id: 1,
        label: 'Item 1',
    },
    {
        id: 2,
        label: 'Item 1',
    },
    {
        id: 3,
        label: 'Item 1',
    },
    {
        id: 4,
        label: 'Item 1',
    },
    {
        id: 5,
        label: 'Item 1',
    },
    {
        id: 6,
        label: 'Item 1',
    },
]

const OpenHold = () => {

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><PackageOpen size={20} className='mr-2' />Open hold</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>Create a customer</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-72 w-full rounded-md border">
                    <div className="p-4 grid grid-cols-2 gap-3">
                        {HOLD_ITEMS.map((item) => (
                            <Fragment key={item.id}>
                                <div
                                    className="border cursor-pointer rounded-md shadow flex items-center justify-between px-1 py-1"
                                >
                                    <p>{item.label}</p>
                                    <Button variant="outline" size="icon">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </ScrollArea>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default OpenHold