import { useEffect, useState } from "react";
import { getMyAdoptions } from "@/services/adoption.service";

export const useMyAdoptions = () => {
    const [adoptions, setAdoptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdoptions = async () => {
            try {
                const res = await getMyAdoptions();
                setAdoptions(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAdoptions();
    }, []);

    return { adoptions, loading };
};