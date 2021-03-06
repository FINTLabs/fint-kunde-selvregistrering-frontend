import {Box, Typography} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import {grey} from "@material-ui/core/colors";

const InformationCard = ({children, dense = false}) => {
    return (
        <Box border={1} borderRadius={8} p={dense ? 1 : 2} borderColor="grey.400"
             display="flex" alignItems="center">
            <Box mr={3} display="flex" alignItems="center">
                <InfoIcon fontSize={dense ? "small" : "large"} style={{color: grey[600]}}/>
            </Box>
            <Typography variant="body2">
                {children}
            </Typography>
        </Box>
    );
}

export default InformationCard;
