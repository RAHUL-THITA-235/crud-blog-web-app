
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/rahul-das-0a5a532b0" color="inherit" target="_blank">
                        <LinkedIn />
                    </Link>
                    or connect with me on
                    <Link href="https://github.com/RAHUL-THITA-235" color="inherit" target="_blank">
                        <GitHub />
                    </Link>
                    or send me an Email
                    <Link href="rdas42036@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;