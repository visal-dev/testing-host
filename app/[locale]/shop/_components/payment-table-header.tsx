import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

const PaymentTableHeader = () => {
    const localActive = useLocale()

    const t = useTranslations('PaymentHeader')
    return (
        <div
            className="text-black/65 border w-full flex items-center h-14"
        >
            <div
                className="grid items-center font-semibold text-xs text-center w-full grid-cols-5"
            >
                <p>{t('tableName')}</p>
                <p>{t('tableTotalPrice')}</p>
                <p>{t('tableQty')}</p>
                <p>{t('tableDiscount')}</p>
                <p>{t('tableAction')}</p>
            </div>
        </div>
    )
}

export default PaymentTableHeader