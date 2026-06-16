import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function RenderBlock({ block }) {

    switch (block.type) {

        case "title":

            return (
                <Box data-aos="fade-up" sx={{ mb: 5 }}>
                    <Typography variant="h4">
                        {block.content}
                    </Typography>
                    <Divider sx={{ mt: -2 }} />
                </Box>
            );

        case "paragraph":

            return (
                <Box data-aos="fade-up">

                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'justify', mb: 5
                        }}
                    >
                        {block.content}
                    </Typography>
                </Box>
            );

        case "image":

            return (
                <Box sx={{ mb: 5 }} data-aos="fade-up">

                    <Box
                        component='img'
                        src={block.url}
                        alt={block.alt}
                        sx={{
                            borderRadius: '20px', boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)', width: '100%',
                            position: 'relative', overflow: 'hidden', height: 'auto',
                        }}
                    />
                    {block.caption && (
                        <Typography
                            variant="caption1"
                        >
                            {block.caption}
                        </Typography>
                    )}
                </Box>
            );

        case "file":

            return (
                <div
                    style={{
                        marginBottom: "24px"
                    }}
                >

                    <a
                        href={block.url}
                        target="_blank"
                    >
                        {block.filename}
                    </a>

                </div>
            );

        case "list":

            return (
                <List sx={{ mb: 5 }} data-aos="fade-up">
                    {block.items.map((item, i) => (
                        <ListItem key={i}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            );

        case "table":

            return (

                <TableContainer sx={{ overflowX: "auto", mb: 5 }} data-aos="fade-up">
                    <Table
                        sx={{
                            width: '100%', tableLayout: 'auto',
                            '& .MuiTableCell-root': {
                                border: '1px solid #E74C3C',
                            }
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                {block.headers.map((header, i) => (
                                    <TableCell key={i} sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {block.rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <TableCell key={cellIndex} sx={{ whiteSpace: "nowrap" }}>{cell}</TableCell>
                                    ))}
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>
            );

        default:
            return null;
    }
}