import * as React from 'react';
import { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DateField, useTranslate, Record, useLocale } from 'react-admin';
import {
    Typography,
    Card,
    CardContent,
    Box,
    Stepper,
    Step,
    StepLabel,
    StepContent,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';

import order from '../orders';
import review from '../reviews';

const useAsideStyles = makeStyles(theme => ({
    root: {
        paddingRight: '25px',
    },
}));

interface AsideProps {
    record?: Record;
    basePath?: string;
}

const Aside: FC<AsideProps> = ({ record, basePath }) => {
    const classes = useAsideStyles();
    return (
        <div className={classes.root}>
            {record && <EventList record={record} basePath={basePath} />}
        </div>
    );
};

Aside.propTypes = {
    record: PropTypes.any,
    basePath: PropTypes.string,
};

interface EventListProps {
    record?: Record;
    basePath?: string;
}

const useEventStyles = makeStyles({
    stepper: {
        background: 'none',
        border: 'none',
        marginLeft: '0.3em',
    },
});

const EventList: FC<EventListProps> = ({ record, basePath }) => {
    const translate = useTranslate();
    const classes = useEventStyles();
    const locale = useLocale();
    // const { data: orders, ids: orderIds } = useGetList<OrderRecord>(
    //     'commands',
    //     { page: 1, perPage: 100 },
    //     { field: 'date', order: 'DESC' },
    //     { customer_id: record && record.id }
    // );

    // const { data: reviews, ids: reviewIds } = useGetList<ReviewRecord>(
    //     'reviews',
    //     { page: 1, perPage: 100 },
    //     { field: 'date', order: 'DESC' },
    //     { customer_id: record && record.id }
    // );
    // const events = mixOrdersAndReviews(orders, orderIds, reviews, reviewIds);
    const events = [
        {
            type: 'message',
            data: {
                id: 1,
                message: 'Enter Store',
            },
            date: '2021/7/31 18:06',
        },
        {
            type: 'product',
            data: {
                id: 2,
                imageUrl:
                    'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_644,h_436,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/lu8s0nc1nrdpsdsx8swd/%E6%97%A5%E6%9C%AC%E9%9B%B6%E9%A3%9F%E9%A9%9A%E5%96%9C%E7%B3%BB%E5%88%97-KLOOKxWOWBOX%E8%81%AF%E5%90%8D%E5%90%88%E4%BD%9C.jpg',
                name:
                    'Starbucks Veranda Blend Golden Roasted Mixed Coffee Beans 1.13kg',
                price: '1,234',
            },
            date: '2021/7/31 18:13',
        },
        {
            type: 'compare',
            data: {
                id: 3,
                imageUrl1:
                    'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_644,h_436,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/lu8s0nc1nrdpsdsx8swd/%E6%97%A5%E6%9C%AC%E9%9B%B6%E9%A3%9F%E9%A9%9A%E5%96%9C%E7%B3%BB%E5%88%97-KLOOKxWOWBOX%E8%81%AF%E5%90%8D%E5%90%88%E4%BD%9C.jpg',
                name1:
                    'Starbucks Veranda Blend Golden Roasted Mixed Coffee Beans 1.13kg',
                price1: '1,234',
                imageUrl2:
                    'https://cdn01.pinkoi.com/product/F6Y5Dthy/0/1/800x0.jpg',
                name2: 'Kirkland Signature Kirkland Columbia Follicular Coffee',
                price2: '4,567',
            },
            date: '2021/7/31 18:25',
        },
        {
            type: 'message',
            data: {
                id: 4,
                message: 'Stay at Wine Zone for 10 minutes',
            },
            date: '2021/7/31 18:35',
        },
        {
            type: 'message',
            data: {
                id: 5,
                message: 'Leave Store',
            },
            date: '2021/7/31 19:02',
        },
    ];

    const renderSwitch = (event: any) => {
        switch (event.type) {
            case 'product':
                return (
                    <Product
                        record={event.data}
                        key={`event_${event.data.id}`}
                    />
                );
            case 'compare':
                return (
                    <Compare
                        record={event.data}
                        key={`event_${event.data.id}`}
                    />
                );
            default:
                return (
                    <Message
                        record={event.data}
                        key={`event_${event.data.id}`}
                    />
                );
        }
    };

    return (
        <>
            <Box m="0 0 1em 1em">
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Journey
                        </Typography>
                        <Box display="flex">
                            <Box flexGrow={1}>
                                <Box display="flex" mb="1em">
                                    <Box mr="1em">
                                        <AccessTimeIcon
                                            fontSize="small"
                                            color="disabled"
                                        />
                                    </Box>
                                    <Box flexGrow={1}>
                                        <Typography>
                                            {translate(
                                                'resources.customers.fields.first_seen'
                                            )}
                                        </Typography>
                                        <DateField
                                            record={record}
                                            source="first_seen"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box flexGrow={1}>
                                <Box display="flex" mb="1em">
                                    <Box mr="1em">
                                        <AccessTimeIcon
                                            fontSize="small"
                                            color="disabled"
                                        />
                                    </Box>
                                    <Box flexGrow={1}>
                                        <Typography>
                                            {translate(
                                                'resources.customers.fields.last_seen'
                                            )}
                                        </Typography>
                                        <DateField
                                            record={record}
                                            source="last_seen"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Stepper orientation="vertical" classes={{ root: classes.stepper }}>
                {events.map(event => (
                    <Step
                        key={`${event.type}-${event.data.id}`}
                        expanded
                        active
                        completed
                    >
                        <StepLabel
                            StepIconComponent={() => {
                                const Component =
                                    event.type === 'product' ||
                                    event.type === 'compare'
                                        ? order.icon
                                        : review.icon;
                                return (
                                    <Component
                                        fontSize="small"
                                        color="disabled"
                                        style={{ paddingLeft: 3 }}
                                    />
                                );
                            }}
                        >
                            {new Date(event.date).toLocaleString(locale, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </StepLabel>
                        <StepContent>{renderSwitch(event)}</StepContent>
                    </Step>
                ))}
            </Stepper>
        </>
    );
};

// interface AsideEvent {
//     type: string;
//     date: Date;
//     data: OrderRecord | ReviewRecord;
// }

// const mixOrdersAndReviews = (
//     orders?: RecordMap<OrderRecord>,
//     orderIds?: Identifier[],
//     reviews?: RecordMap<ReviewRecord>,
//     reviewIds?: Identifier[]
// ): AsideEvent[] => {
//     const eventsFromOrders =
//         orderIds && orders
//             ? orderIds.map<AsideEvent>(id => ({
//                   type: 'order',
//                   date: orders[id].date,
//                   data: orders[id],
//               }))
//             : [];
//     const eventsFromReviews =
//         reviewIds && reviews
//             ? reviewIds.map<AsideEvent>(id => ({
//                   type: 'review',
//                   date: reviews[id].date,
//                   data: reviews[id],
//               }))
//             : [];
//     const events = eventsFromOrders.concat(eventsFromReviews);
//     events.sort(
//         (e1, e2) => new Date(e2.date).getTime() - new Date(e1.date).getTime()
//     );
//     return events;
// };

// interface OrderProps {
//     record?: OrderRecord;
//     basePath?: string;
// }

// const Order: FC<OrderProps> = ({ record, basePath }) => {
//     const translate = useTranslate();
//     return record ? (
//         <>
//             <Typography variant="body2" gutterBottom>
//                 <Link to={`/commands/${record.id}`} component={RouterLink}>
//                     {translate('resources.commands.name', {
//                         smart_count: 1,
//                     })}{' '}
//                     #{record.reference}
//                 </Link>
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//                 {translate('resources.commands.nb_items', {
//                     smart_count: record.basket.length,
//                     _: '1 item |||| %{smart_count} items',
//                 })}
//                 &nbsp;-&nbsp;
//                 <NumberField
//                     source="total"
//                     options={{
//                         style: 'currency',
//                         currency: 'USD',
//                     }}
//                     record={record}
//                     basePath={basePath}
//                 />
//                 &nbsp;-&nbsp;
//                 <TextField
//                     source="status"
//                     record={record}
//                     basePath={basePath}
//                 />
//             </Typography>
//         </>
//     ) : null;
// };

const StyledProduct = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    & img {
        width: 200px;
    }
    & .group {
        margin-left: 15px;
    }
    & .title {
        margin-bottom: 15px;
        font-weight: bolder;
    }
`;

const Product: FC<any> = ({ record }) => {
    return record ? (
        <>
            <Typography variant="body2" color="textSecondary">
                Scan Product
            </Typography>
            <StyledProduct>
                <img src={record.imageUrl} alt="product" />
                <div className="group">
                    <div className="title">{record.name}</div>
                    <div>$ {record.price}</div>
                </div>
            </StyledProduct>
        </>
    ) : null;
};

const CompareWrapper = styled.div`
    display: flex;
`;

const Compare: FC<any> = ({ record }) => {
    return record ? (
        <>
            <Typography variant="body2" color="textSecondary">
                Compare Products
            </Typography>
            <CompareWrapper>
                <StyledProduct>
                    <img src={record.imageUrl1} alt="product" />
                    <div className="group">
                        <div className="title">{record.name1}</div>
                        <div>$ {record.price1}</div>
                    </div>
                </StyledProduct>
                <StyledProduct>
                    <img src={record.imageUrl2} alt="product" />
                    <div className="group">
                        <div className="title">{record.name2}</div>
                        <div>$ {record.price2}</div>
                    </div>
                </StyledProduct>
            </CompareWrapper>
        </>
    ) : null;
};

const useMessageStyles = makeStyles({
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
});
const Message: FC<any> = ({ record }) => {
    const classes = useMessageStyles();
    return record ? (
        <>
            <Typography
                variant="body2"
                color="textSecondary"
                className={classes.clamp}
            >
                {record.message}
            </Typography>
        </>
    ) : null;
};

export default Aside;
