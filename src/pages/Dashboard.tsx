
import OtherHeader from '../layout/OtherHeader'
import Dashboard from '../components/openPositions/Dashboard'

export default function DashboardPage() {

    return (
        <main id="other-wrapper">
            <OtherHeader comingSoon={false} />
            <Dashboard />
        </main>

    )
}
