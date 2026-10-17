import React from 'react'
import { Label } from '../ui/label';
import { Gender } from '@/utils/type';

export const genderLabels: Record<Gender, string> = {
    MEN: 'Men',
    WOMEN: 'Women',
    KIDS: 'Kids',
};

function GenderSelect({ defaultValue = 'MEN' }: { defaultValue?: Gender }) {
    return (
        <div className='mb-2'>
            <Label htmlFor='gender' className='capitalize mb-2'>
                Section
            </Label>
            <select
                id='gender'
                name='gender'
                defaultValue={defaultValue}
                className='h-9 w-full rounded-md border bg-transparent px-3 text-sm'
            >
                {Object.entries(genderLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </div>
    )
}

export default GenderSelect
