// import { HTMLProps } from 'node:crypto'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckBoxProps extends HTMLProps<HTMLInputElement> {
  label?: string
  boxId?: string
}

export function CheckBox({ label, className, boxId, ...props }: CheckBoxProps) {
  return (
    <>
      <div className="flex items-center rounded border border-gray-200 dark:border-gray-700">
        <input
          id={boxId}
          type="checkbox"
          className={twMerge(
            'h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-dark-primary-600 dark:ring-offset-gray-800 dark:focus:ring-dark-primary-500',
            className,
          )}
          {...props}
        />
        {label ? (
          <label
            htmlFor={boxId}
            className="ml-2 w-full  py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  )
}
