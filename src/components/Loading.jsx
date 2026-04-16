import { LoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center gap-2">
      <LoaderCircle /> Cargando...
    </div>
  )
}
