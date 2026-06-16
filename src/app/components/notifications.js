import { Box, Divider, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";


const Notifications = () => {


    const [notifications, setNotifications] = useState([]);


    const fetchNotifications = async () => {
        try {
            const res = await fetch(
                'https://fmtcpallimukku.ac.in/api/notifications/notification_get_data.php'
            );

            const data = await res.json();

            if (data.success) {
                setNotifications(data.data);

            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [])



    return (
        <Box
            sx={{
                boxShadow: '0px 10px 20px 0px rgba(223,234,244,0.5)', height: '100%',
                border: '2px solid #0b2d53'
            }}
            data-aos="fade-up"
        >
            <Box sx={{ textAlign: 'center', background: '#0b2d53', p: 1 }}>
                <Typography
                    variant="h6"
                    sx={{ color: '#ffffff' }}
                >
                    NEWS & EVENTS
                </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
                <marquee
                    behavior='scroll'
                    direction='up'
                >

                    {notifications.map((notification) => (
                        <Box key={notification.id}>
                            <Typography
                                variant="subtitle2"
                            >
                                {notification.notification}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#888' }}
                            >
                                {moment(notification.date).format("DD-MMM-YYYY")}
                            </Typography>
                            <Divider sx={{ py: 0.5, my: 1 }} />
                        </Box>

                    ))}
                </marquee>

            </Box>

        </Box>
    )
}

export default Notifications;