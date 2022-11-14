import * as React from 'react';
import { Container, Grid } from "@mui/material"
const style = {
    height : '50px',
    weight :'50px',
    borderRadius:'5px'
}
const MiniCardFriut = () => {

    return (
        <Container >
            <Grid>
                <img style={style} src='/static/image/apple.jpg'/>
                fejfoje
            </Grid>
        </Container>
    )
}

export default MiniCardFriut