import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import StatsItem from './StatsItem';

const Stats = () => {

    const [stats, setStats] = useState({
        totalWinSum: 0,
        totalWinCount: 0,
        totalLoseSum: 0,
        totalLoseCount: 0
    });

    useEffect(() => {
        const mockStats = {
            totalWinSum: 100,
            totalWinCount: 2,
            totalLoseSum: 300,
            totalLoseCount: 3
        };
        setStats({
            totalWinSum: mockStats.totalWinSum,
            totalWinCount: mockStats.totalWinCount,
            totalLoseSum: mockStats.totalLoseSum,
            totalLoseCount: mockStats.totalLoseCount
        });
    },[]);

    const getProfit = () => {return stats.totalWinSum - stats.totalLoseSum};
    const getTotalGames = () => {return stats.totalWinCount + stats.totalLoseCount};

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
        >
            {/* <Grid container item xs={12} justify="center">
                <CircularProgress variant="static" value={75} />
            </Grid> */}
            <StatsItem name="Сумма выигрыша" number={stats.totalWinSum}></StatsItem>
            <StatsItem name="Игр выиграно" number={stats.totalWinCount}></StatsItem>
            <StatsItem name="Сумма проигрыша" number={stats.totalLoseSum}></StatsItem>
            <StatsItem name="Игр проиграно" number={stats.totalLoseCount}></StatsItem>
            <StatsItem name="Профит" number={getProfit()}></StatsItem>
            <StatsItem name="Количество игр" number={getTotalGames()}></StatsItem>
        </Grid>
    );
}

export default Stats;