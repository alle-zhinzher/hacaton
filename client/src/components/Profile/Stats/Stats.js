import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import StatsItem from './StatsItem';
import LevelBar from './LevelBar';

const Stats = () => {

    const [user, setUser] = useState({
        level: 0,
        exp: 0
    });
    const [stats, setStats] = useState({
        totalWinSum: 0,
        totalWinCount: 0,
        totalLoseSum: 0,
        totalLoseCount: 0
    });

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/}
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

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/}
        const mockUser = {
            level: 50,
            exp: 750,
        };
        setUser({
            level: mockUser.level,
            exp: mockUser.exp
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
            <LevelBar level={user.level} exp={user.exp}></LevelBar>
            <StatsItem name="Total Winnings" number={stats.totalWinSum}></StatsItem>
            <StatsItem name="Games Won" number={stats.totalWinCount}></StatsItem>
            <StatsItem name="Total Lost" number={stats.totalLoseSum}></StatsItem>
            <StatsItem name="Games Lost" number={stats.totalLoseCount}></StatsItem>
            <StatsItem name="Profit" number={getProfit()}></StatsItem>
            <StatsItem name="Games Played" number={getTotalGames()}></StatsItem>
        </Grid>
    );
}

export default Stats;