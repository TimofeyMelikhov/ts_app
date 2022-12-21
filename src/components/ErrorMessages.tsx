interface ErrorMessageProps {
  error: string
}

export function ErrorMessages({ error }: ErrorMessageProps) {
  return (
    <p className='text-center text-red-600'> { error } </p>
  )
}
