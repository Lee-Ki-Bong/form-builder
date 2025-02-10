import Logo from "@/components/Logo"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { UserButton } from "@clerk/nextjs"
import React, { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-h-screen min-h-screen min-w-full flex-col bg-background">
      <nav className="border-border flex h-[60px] items-center justify-between border-b px-4 py-2">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <UserButton />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  )
}

export default Layout
