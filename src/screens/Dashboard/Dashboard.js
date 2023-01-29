import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../assets/images/Logo_1.png';
import Accounts from '../../data/accounts.json';

const accounts = Accounts;

const windowHeight = Dimensions.get('window').height;

function ListOfAccounts(accounts) {
    const listAccounts = accounts.accountsList.map((account) =>
        <TouchableOpacity key={account.name} style={styles.accountList_item}>
            <View style={styles.accountList_item_image_text}>
                <Image 
                    source={Logo}
                    style={{width: 50, height: 50, marginRight: 5}}
                />
                <View>
                    <Text style={styles.account_name}>{account.name}</Text>
                    <Text>{account.bank_account.account_number}</Text>
                </View>
            </View>
            <AntDesign name='arrowright' size={20} color='#153ee7'/>
        </TouchableOpacity>
    );
    return (
        <View>
            {listAccounts}
            <View style={styles.createAccountContainer}>
                <TouchableOpacity style={styles.createAccountContainer_icon_text}>
                    <AntDesign
                        name="plus"
                        size={20}
                        color="#edf1f2"
                        style={{marginRight: 5}}
                    />
                    <Text>Add an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Dashboard = () => {
    return (
        <ScrollView style={styles.root}>
            {/* Header */}
            <View style={styles.header}>
                {/* Header Items */}
                <View style={styles.headerItems}>
                    <TouchableOpacity style={styles.headerItems_item}>
                        <AntDesign 
                            name='wallet'
                            size={20}
                            color='#fff'
                            style={{marginRight: 5}}
                        />
                        <Text style={styles.headerItems_text}>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerItems_item}>
                        <AntDesign 
                            name='wallet'
                            size={20}
                            color='#fff'
                            style={{marginRight: 5}}
                        />
                        <Text style={styles.headerItems_text}>Transactions</Text>
                    </TouchableOpacity>
                </View>
                {/* Account Amount */}
                <View style={styles.accountView}>
                    <Text style={styles.accountText}>Rp 2.000.000</Text>
                </View>
            </View>
            {/* Top Actions */}
            <View style={styles.topViewContainer}>
                <View style={styles.topCard}>
                    <View style={styles.topCardRow}>
                        <TouchableOpacity style={styles.topCardRow__item}>
                            <AntDesign name='pluscircleo' size={20} color='#0e39c8'/>
                            <Text style={styles.topCardRow__item_text}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topCardRow__item}>
                            <AntDesign name='minuscircleo' size={20} color='#0e39c8'/>
                            <Text style={styles.topCardRow__item_text}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topCardRow__item}>
                            <FontAwesome name='exchange' size={20} color='#0e39c8'/>
                            <Text style={styles.topCardRow__item_text}>Exchange</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* List of Accounts */}
            <View style={styles.accountTextContainer}>
                <Text style={styles.accountTextContainer_text}>
                    Recent Accounts
                </Text>
            </View>
            <ListOfAccounts accountsList={accounts}/>
            {/* Latest Transactions */}
            <View style={styles.accountTextContainer}>
                <Text style={styles.accountTextContainer_text}>
                    Latest Transactions
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.lastTransactionItem}>
                    <View>
                        <Text style={styles.lastTransactionItem_text}> Payment</Text>
                        <Text>Rp 30.000</Text>
                    </View>
                    <AntDesign name="arrowright" color="#154ee7" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lastTransactionItem}>
                    <View>
                        <Text style={styles.lastTransactionItem_text}> Payment</Text>
                        <Text>Rp 30.000</Text>
                    </View>
                    <AntDesign name="arrowright" color="#154ee7" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lastTransactionItem}>
                    <View>
                        <Text style={styles.lastTransactionItem_text}> Payment</Text>
                        <Text>Rp 30.000</Text>
                    </View>
                    <AntDesign name="arrowright" color="#154ee7" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.lastTransactionItem}>
                    <View>
                        <Text style={styles.lastTransactionItem_text}> Payment</Text>
                        <Text>Rp 30.000</Text>
                    </View>
                    <AntDesign name="arrowright" color="#154ee7" size={20} />
                </TouchableOpacity>
            </View>
            

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#edf1f2',
    },
    
    header: {
        backgroundColor: '#154ee7',
        height: windowHeight * 0.3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingHorizontal: 20,
    },
    headerItems: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerItems_item: {
        flexDirection: 'row',
        backgroundColor: '#1d50b1',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 5,
        borderRadius: 15,
    },
    headerItems_item_inactive: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 5,
        borderRadius: 15,
    },
    headerItems_text: {
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
    },
    headerItems_text_unactive: {
        color: '#eee',
        fontFamily: 'OpenSans-Regular',
    },

    accountView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    accountText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
    },

    topViewContainer: {
        left: 0, 
        right: 0, 
        height: 90, 
        marginTop: -45
    },
    topCard: {
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderRadius: 5,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topCardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topCardRow__item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topCardRow__item_text: {
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
    },

    accountTextContainer: {
        padding: 15,
        marginTop: 15,
    },
    accountTextContainer_text: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
    },

    accountList_item: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#edf1f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    accountList_item_image_text: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    account_name: {
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        color: '#000',
    },

    createAccountContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#edf1f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    createAccountContainer_icon_text: {
        borderWidth: 1,
        borderColor: '#edf1f2',
        flexDirection: 'row',
        padding: 12,
        borderRadius: 30,
    },
    
    lastTransactionItem: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#edf1f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    lastTransactionItem_text: {
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        color: '#000',
    },
});

export default Dashboard;