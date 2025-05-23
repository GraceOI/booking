'use client'

import { SessionProvider } from 'next-auth/react'

type ProvidersProps = {
  children: React.ReactNode
  session: any
}

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}