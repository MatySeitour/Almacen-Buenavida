import Main from "@/components/Main"
import MainLayout from "@/components/layouts/MainLayout"

export default function home() {

    return (
        <MainLayout>
            <main className="min-w-screen min-h-screen h-auto w-auto">
                <Main />
            </main>
        </MainLayout>
    )
}
