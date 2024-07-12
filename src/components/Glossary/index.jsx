import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const GLOSSARY = [
    {
        title: 'Adverse Action Notice:',
        description: 'A notice sent by a lender after denying a person\' request for credit based on information from the individual\'s credit report.'
    },
    {
        title: 'Balance:',
        description: 'The amount owed on a particular debt obligation.'
    },
    {
        title: 'Bankruptcy:',
        description: 'A proceeding in the U.S. Bankruptcy court that may legally release a person from repayment of debts owed or reduce the amount owed over a set amount of years. Credit Reports typically show fillings for bankruptcy claimed until 7-10 years after the claim was filed. Bankruptcy is also public knowledge.'
    },
    {
        title: 'Charge-off:',
        description: 'A declaration by a lender, generally for tax purposes, that a particular debt account and amount is unlikely to be collected. This typically occurs when an individual becomes severely delinquent in repayment of his/her debts. The lender reports to the credit bureaus that it has taken a loss, but the borrower is still technically responsible for paying back the debt. Otherwise known as a "write-off" or "tax write-off".'
    },
    {
        title: 'Collection:',
        description: 'Attempted recovery of a past-due debt obligation by a lender\'s collection department or a separate collection agency altogether.'
    },
    {
        title: 'Credit Account:',
        description: 'A specific lending arrangement between a borrower and a creditor which provides the borrower with a loan or a revolving line of credit such as a credit card. Under the guidelines of the credit account the borrower has an obligation to repay the creditor with whatever stipulations outlined. Most commonly referred to as credit or debt obligations.'
    },
    {
        title: 'Credit Bureau:',
        description: 'An agency that collects and store consumer credit information and sells it for a fee to creditors so that they may determine a consumer\'s credit worthiness and use the information to make decisions regarding loan approvals and other credit related activities. Typical clients include banks, mortgage lenders and credit card issuers. Also commonly referred to as a consumer reporting agency (CRA), credit reporting agency or credit repository. The three largest credit bureaus in the U.S. are TransUnion, Experian, and Equifax.'
    },
    {
        title: 'Credit Bureau Risk Score:',
        description: 'A credit score calculated by one of the three largest credit bureaus. The score is based only on the credit history from the person\'s credit report. The FICO score is the leading brand of credit bureau risk scores, however the Vantage score has become more popularized as of late (mostly due to credit karma).'
    },
    {
        title: 'Credit File:',
        description: 'An individual\'s credit records at any given credit reporting bureau. The credit file typically includes the consumer\'s name, address, social security number, credit history, soft & hard inquiries, records of collection accounts and any other public records like bankruptcy or tax liens.'
    },
    {
        title: 'Credit History:',
        description: 'The individual record of a consumer\'s credit accounts and activity related. This typically include how a consumer has repaid their debt obligations in the past.'
    },
    {
        title: 'Credit Limit:',
        description: <span>The total credit availability a given financial institution has extended to a borrower. Credit card companies base available lines of credit on <Link href="/debt-to-income-ratio"><span className={styles.bold}>debt to income</span></Link> and the borrower\'s ability to repay any credit extensions.</span>
    },
    {
        title: 'Credit Report:',
        description: 'A report detailing a consumer\'s credit history as reported by a particular credit bureau. Credit reports include all repayment on debt obligations and all relevant personal information from a consumer.'
    },
    {
        title: 'Default:',
        description: 'When a debtor is unable or unwilling to establish repayment on a debt obligation. After continuous non-payment a consumer is typically considered to be in default after a 90 day delinquency.'
    },
    {
        title: 'Inquiry:',
        description: 'An item on a consumer\'s credit report that indicates someone with "permissible purpose" has requested a copy of the person\'s credit report for the purpose of assessing terms of a lending agreement or extension of credit.'
    },
    {
        title: 'Installment Debt:',
        description: 'Debt which is supposed to be paid back at regular intervals over a specific period of time. Examples of installment loans or debt include: mortgages, auto loans, debt consolidation loans, etc.'
    },
    {
        title: 'Late Payment:',
        description: 'Failure to make a payment on a debt obligation on or before the agreed due date.'
    },
    {
        title: 'Permissible Purpose:',
        description: 'The Fair Credit Reporting Act (or FCRA) prohibits a credit bureau from furnishing an individual\'s credit report unless there is a permissible purpose for doing so. Permissible purposes include using a credit report for a credit or insurance transaction, for employment purposes, or account review. Otherwise, if a consumer directly requests to view their report or gives consent this is permissible as well.'
    },
    {
        title: 'Revolving Credit/Debt:',
        description: 'This is a line of credit that a borrower can repeatedly use and pay back without having to re-apply for an extension of credit every time. Most common revolving lines of credit include: Home Equity Lines of Credit (HELOCs) and Credit Card Accounts.'
    },
    {
        title: 'Utilization:',
        description: 'The proportion of an owed balance on a revolving debt obligation divided by the total amount of available credit. If you have $1,000 balance on a credit card with a $10,000 limit, your utilization rate on that account is 10%.'
    }
];

const Glossary = () => {
    return (
    <div className={styles.root}>
        <div className={styles.content}>
            <div className={styles.list}>
                {
                    GLOSSARY.map((item, i) => (
                        <div className={styles.listItem} key={i}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.description}>{item.description}</div>
                        </div>
                    ))
                }
                <div className={styles.description}>Glossary as defined by Fair Isaac Corporation</div>
            </div>
            <Image className={styles.cocktailImage} src={'/static/img/debtToIncome/cocktail.svg'} alt={'Cocktail'} width={130} height={219}/>
            <Image className={styles.tropicalImage} src={'/static/img/group-7@2x.svg'} alt={'Tropical drink'} width={133} height={179}/>
            <Image className={styles.starImage} src={'/static/img/creditWorthiness/star.svg'} alt={'Sea star'} width={120} height={98}/>
            <Image className={styles.surfingImage} src={'/static/img/debtToIncome/surfing.svg'} alt={'Surfing board'} width={173} height={300}/>
        </div>
    </div>
  );
}

export default Glossary;
