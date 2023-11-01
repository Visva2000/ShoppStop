import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActionArea, CardActions, Skeleton } from '@mui/material';

const ProductCardSkeleton=()=> {
  return (
    <Card sx={{ maxWidth: 345,width:300 }}>
     
       <Skeleton variant="rectangular" height={240}  animation="wave"/>
        <CardContent>
        <Skeleton variant="text" animation="wave"  height={20} width="90%" sx={{mb:2}}  />  
        <Skeleton variant="text" animation="wave"  height={14} width="80%" sx={{mb:2}}  />  
        <Skeleton sx={{borderRadius:20}} variant="rounded" width={117} height={20} />
          <Skeleton variant="text" animation="wave"  height={20} width="20%" sx={{my:2}}  /> 
        </CardContent>
      
      <CardActions>
      <Skeleton variant="rounded"  height={40} width="35%" sx={{my:2}}  /> 
      </CardActions>
    </Card>
  );
}

export default ProductCardSkeleton
