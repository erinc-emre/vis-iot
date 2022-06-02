import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function createData(
  name: string,
  status: string,
  location: string,
  last24: number
) {
  return { name, status, location, last24 };
}

const rows = [
  createData("Frozen yoghurt", "🟢", "Test St No:12", 24),
  createData("Ice cream sandwich", "🔴", "Test St No:13", 37),
  createData("Eclair", "🟢", "Test St No:14", 24),
  createData("Cupcake", "🟢", "Test St No:15", 67),
  createData("Gingerbread", "🟢", "Test St No:16", 49),
  createData("Cupcake", "🔴", "Test St No:17", 67),
  createData("Gingerbread", "🟢", "Test St No:18", 42),
];

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <Container sx={{ mt: 6 }} maxWidth="lg">
      <Grid container justifyContent="center" sx={{ my: 2 }}>
        <h1>Bird Detection System</h1>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">In Last 24 Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.last24}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
        <IconButton sx={{ border: 2 }} aria-label="delete" color="secondary">
          <AddIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Container>
  );
});
