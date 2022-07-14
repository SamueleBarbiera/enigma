import Layout from 'src/components/admin/sidebar'

export default function About() {
    return (
        <Layout>
            <div className="flex h-full flex-col items-center justify-center">
                <h1 className="mb-5 text-4xl font-bold">About</h1>
                <span className="text-7xl">💬</span>
            </div>
        </Layout>
    )
}
