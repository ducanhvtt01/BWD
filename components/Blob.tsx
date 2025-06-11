export default function Blob({ className='' }: {className?:string}) {
  return (
    <div
      className={
        'absolute rounded-full bg-sky-200 opacity-40 mix-blend-multiply filter blur-3xl animate-slow-spin ' +
        className
      }
      style={{ width: '40rem', height: '40rem' }}
    />
  )
}
