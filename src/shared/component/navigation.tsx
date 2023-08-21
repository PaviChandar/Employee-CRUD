import { useNavigate } from "react-router"

export const handleNavigation = (route: string) => {
    const navigate = useNavigate()

    return navigate(route)
}