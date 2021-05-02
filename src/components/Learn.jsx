import React, { useState } from "react";
import Popup from "./Popup";
import "./Popup.css";
import Card1 from "./Card1";

var KuchBhi = [
	{
		content: `<div class="title">
				<h1>IMPORTANCE OF INVESTING</h1>
				<br />
				<p>
					Investing your hard-earned money in assets that will
					generate returns on your investment to get through your life
					after retirement and fulfill your dreams. Investing is a
					long journey and it's very important to know how one goes
					about it and plans efficiently while still earning To put it
					simply you make your money work for you so that you can
					enjoy the returns in the future. Around 40% of the
					population in the developed countries reap the benefits of
					investing, but in India, it's mere 1.5 to 2%. There are
					mainly two reasons we as a country aren't that aware or
					active towards investing. First is the traditional image of
					the stock market in our country, which mainly is stained
					with scams and other debauchery that took place in the
					not-so-distant past. People tend to feel that investing is a
					gamble. On the other hand, the complexity of investing can
					be daunting to the beginner, in the early days investing was
					not that simple, it was rife with paperwork and other
					limitations.
					<br />
					<br />
					But as our country progressed, these problems were curbed.
					Now we have a regulatory authority to watch over the
					functioning of stock markets, i.e. SEBI(Securities and
					Exchange Board of India). The main purpose of SEBI is to
					safeguard the rights and interests of the investor, reduce
					malpractices related to the stock exchange, establish a code
					of conduct and promote the healthy functioning of the stock
					exchange. And with digitalization investing has become easy,
					as simple as clicking a button on your mobile phone and
					buying stocks and other assets. So with all this, we can say
					investing has become a lot safer and far more efficient
					compared to previous years.
					<br /><br />
					Now, we come to a very important aspect i.e. the
					misconception that investing is speculation. Speculation is
					considered as targeting higher returns within a short period
					without any proper research and approach. Investing on the
					other hand is a systematic approach that includes proper
					research. take care of the risks such that the returns are
					commensurate with the undertaken risk. To summarize, we have
					4 compelling reasons why one should start investing:
					<br />
					1] Creating wealth - With investing, one can fulfill their
					goals of having a good corpus by the end of a defined
					period.
					<br />
					2] To meet one's aspirations - a better car, a better home,
					vacations, and many more.
					<br />
					3] Retirement Plan or FIRE - 
					The majority of people invest for retirement purposes. As
					most people rely on their salary income for meeting their
					needs, it becomes difficult to sustain their lifestyles
					after retirement when one does not have a job. A lot of
					folks also want to retire early, in order to do that they
					need to invest a larger portion of their income to fulfill
					their goals. The “FIRE” Movement has become a major trend in
					the millennials. “ Financial Independence, Retire Early
					(FIRE)” is something many are aiming for nowadays.
					<br />
					4] Beat Inflation - 
					Investing is also important to beat inflation. If you don’t
					invest your money but just leave it in your checking or
					savings account, the money will decline in purchasing power
					as inflation will eat away the value of your money.
                    <br>
                    <br>
                    <h1>FUNDAMENTALS OF INVESTING</h1> <br>
                     1] Start early (Benefit of Compounding).
                    <br>
                    2] Invest Reguarly.
                    <br>
                    3] Invest for a longer time frame. 
				</p>
				<br>
                <br>
                <h5>Happy Investing :)</h5>
			</div>`,
		heading: "01 IMPORTANCE OF INVESTING",
		body: `Investing - an act of allocating resources with
								the expectation of generating an income or
								profit. The expectation of a return in the form
								of income or price appreciation with statistical
								significance is the core premise of investing.
								Click to read the whole article :)`,
	},
	{
		content: `<div class="title">
				<h1>ASSET CLASSES</h1>
				<br />
				<p>
					Having realized the importance and need of investing, the
					next obvious doubt is - where to invest and what are the
					returns one can get? Here comes the asset class! You can
					think of asset classes like the different flavors of the
					financial markets that investors can invest in if they want
					to. More formally an asset class is a grouping of
					investments that have similar characteristics it's debatable
					how many main asset classes there are but we're going to
					focus on the most common ones those being: <br />
					1] Equity <br />
					2] Fixed-Income/ Debt<br />
					3] Real Estate <br />
					4] Gold
					<br />
					These are the only 4 viable investment options/ asset
					classes available. Spreading out your investments across a
					variety of assets is a smart way to lower the risks
					involved.
				</p>

				<h3>EQUITY</h3>
				<p>
					Investment in equities you buy shares of publicly listed
					companies i.e. ownership in the company in proportion to
					your investments. Additionally, you are entitled to get
					dividends from the company’s profit. As the stock price
					rises, your investment appreciates and you get to sell it at
					a higher price to pocket the profit. Investment in equities
					does not provide fixed returns, but when you invest in a
					good company there are chances of getting higher returns in
					the longer run. Stocks are liquid assets, you can easily
					convert them into cash. You can directly buy the shares or
					invest using mutual funds (Sahi Hai!). Investors having a
					long-term view invest in equities, as they have the
					potential to create a fortune for the investors.
				</p>

				<h3>FIXED INCOME/ DEBT</h3>
				<p>
					Fixed Income (FI) Instruments are assets associated with
					less risk and limited returns. They include bank fixed
					deposits, bonds issued by the Govt of India, bonds issued by
					Govt agencies, or corporate bonds. These options provide a
					fixed rate of interest on the amount invested when you stay
					invested for a fixed tenure. But if it is partially or fully
					withdrawn before the period of maturity or before the tenure
					ends, the investors can be can penalized. Hence, FDs are not
					as liquid as stocks. Compared to stocks, Fixed Income
					Insturemmnts are less volatile and the values do not
					fluctuate as much as of the stocks. However, Debt securities
					like bonds may be affected due to fluctuations in the
					overall interest rate environment. Investors with a low-risk
					appetite or a conservative approach opt for this type of
					asset class.
				</p>

				<h3>REAL ESTATE</h3>
				<p>
					Real Estate Investment involves buying and selling
					commercial or non-commercial land. Most people believe that
					real estate investment yielded higher returns than any other
					asset class until the collapse of the real estate market in
					India after 2008. Typical examples would be apartments,
					farmlands, plots, and commercial spaces. There are basically
					two types of income from real estate - the rental income and
					the capital appreciation of the property itself. It is a
					relatively illiquid asset (it takes time to find a buyer at
					the right price), you may probably invest in real estate if
					you are sitting on cash with no debt and enough emergency
					funds and retirement funds. If you want to invest in
					property, you need to have a long-term horizon. REITs are
					yet another modern-day way of investing in real estate.
					REITs or ‘Real Estate Investment Trusts’ is a company that
					owns, operates, or finances income-generating real estate.
					It works like mutual funds wherein it pools capital from
					investors and invests in properties. Investors can earn
					dividends from these investments without buying, managing,
					or financing any properties themselves. Some of the publicly
					listed REITs are Embassy Park REITs, Mindspace REITs, etc.
				</p>

				<h3>GOLD</h3>
				<p>
					Investment in gold and silver is considered the safest asset
					class ever. Both gold and silver over the long term have
					appreciated in value. They generally resulted in a return of
					approximately;y 7-8% over the last two decades. There are
					quite a few ways to invest in gold and silver. One has the
					option of investing in the form of jewelry or Exchange
					Traded Funds(ETF), or Sovereign Gold Bonds(SGB).
				</p>
				<br />
				<h1>ASSET ALLOCATION/ PORTFOLIO MANAGEMENT</h1>
				<br />
				<p>
					Your asset allocation/ portfolio should be a mix of all
					asset classes. It is advised to diversity your investment
					among various assets to create a portfolio. The process of
					allocation of money across various asset classes is referred
					to as asset allocation or portfolio management. Overall, you
					should keep your financial portfolio diversified so that you
					can have a good blend of high-risk investments like equities
					while some safe assets like debt for emergencies. Remember
					to stick to your risk profile while investing.
					<br />
					• For example, a young working individual has a higher risk
					profile, considering his age and the number of years to
					retirement. Typically, such investors should allocate at
					least 70% of the funds in Equity and 20% in Fixed income,
					and the rest in Gold or Silver.
					<br />
					• By similar logic, a retired individual could invest 70% of
					his funds in fixed income, 20% in equity, and 10% in Gold
					and Silver.
					<br />
					• So basically, the ratio in which one allocates funds
					across various assets depends upon the risk profile of the
					investor.
				</p>
				<br />
				<br />
				<h5>Happy Investing :)</h5>
			</div>`,
		heading: "02 ASSET CLASSES",
		body: `An asset class is a grouping of investments that
								exhibit similar characteristics and are subject
								to the same laws and regulations. Asset classes
								are made up of instruments which often behave
								similarly to one another in the marketplace.
								Click to read the whole article :)`,
	},
	{
		content: `<div class="title">
				<h1>PERSONAL FINANCE</h1>
				<br />
				<p>
					A generic definition of personal finance is, “maintaining
					your own money throughout your life.” In simple words, “It
					involves the understanding of the facts like how everyday
					spending affects our accounts, the utility of credit cards,
					how varying interest rates could make or break our
					portfolios”. These fundamental concepts assist in framing a
					picture of how stable an individual is financially and more
					importantly how to raise that stability in the future.
				</p>
				<p>
					Long ago, there was a king who loved playing chess. Once, he
					challenged a traveler sage to play Chess. He was ready to
					reward him whatever he demands if he wins. The traveler is a
					modest guy asked only for some rice. The sage said, “On the
					chessboard, one rice grain will be placed on the first
					square, 2 rice grains will be placed on the second square, 4
					rice grains will be placed on the third square, 8 rice
					grains will be placed on the fourth square and so on for all
					64 squares”. The king confidently started adding the rice
					grains as instructed by the sage. He soon realized that on
					the 10th square, he needs to place 512 rice grains and the
					number would further grow exponentially making it impossible
					to finish the task. The sage won and he revealed his true
					identity as Lord Krishna. Lord Krishna asked the king to
					provide Paal Payasam (Rice pudding) in his Temple daily.
					<br />
					This story can accurately explain the Power of Compounding.
					Isn’t it rightly called the 8th Wonder of the world? Just
					imagine, how compounding can grow your wealth exponentially
					over a period of time. Let’s find out how we can put this to
					work:
				</p>
				<br />
				<h3>30% CREDIT LIMIT RULE</h3>
				<p>
					Try to keep your credit utilization ratio (percentage of
					your credit limit you are using) to 30% for any month. For
					example, if your credit card limit is 1 lakh, and if you
					spend Rs 30,000, your CUR is 30%. Try and stay within this
					limit as it will help you improve your credit score.
				</p>
				<br />
				<h3>20X LIFE COVER RULE</h3>
				<p>
					If you are buying life insurance, make sure that your sum
					assured can take care of you and your family’s income needs
					for the long term. If you are in your 30s, then the sum
					assured should at least be 20X your current annual income,
					or more.
				</p>
				<br />
				<h3>50-30-20 BUDGETING RULE</h3>
				<p>
					The rule was written by Elizabeth Warren in her book “All
					your worth”, which encourages you to divide your after-tax
					income into three categories. 50% of the income goes to
					needs, 30% wants and the remaining 20% goes to investing.
				</p>
				<h5>• 50% NEEDS</h5>
				<p>
					Needs are the necessary expenses for survival, Activities
					like paying bills, getting the groceries, paying rent,
					insurance premiums and other minimal expenses and more such
					obligations. According to the rule, up to 50% of your
					after-tax income can be used for all these things.
				</p>

				<h5>• 30% WANTS</h5>
				<p>
					Wants are the expenses that are not essential for survival,
					but for a better quality of life. It includes things that
					bring you pleasure. Shopping, dinings, hobbies, vacations,
					expensive gadgets, etc. are some examples. Try restricting
					these expenses to less than 30% of your income. This is an
					area where most of us end up overspending
				</p>

				<h5>• 20% SAVINGS AND INVESTMENTS</h5>
				<p>
					While needs and wants take care of your present, the savings
					will take care of your future and ensure a comfortable
					lifestyle. This segment perhaps is the most important and
					yet the most underrated. Unlike needs and wants, savings
					should be non-negotiable and should be the topmost priority.
				</p>
				<br />
				<h3>EMERGENCY FUND</h3>
				<p>
					An emergency fund must be prepared and kept aside in case
					any unforeseen situation comes forwards, for example,
					COVID-19. Since such a situation can be unanticipated, the
					emergency fund should be invested in a highly liquid
					investment asset. Make sure you park your investments in
					such a place that promises you at least your principal
					amount when you liquidate it. <br />
					An Emergency Fund should comprise monthly expenses for the
					next 6 months. For instance, if the monthly expense is Rs.
					50,000, then the corpus should be Rs. 3,00,000 (50,000*6).
					You can divide the corpus into Recurring Deposits, Fixed
					Deposits, and Liquid Funds. Apart from that, some portion of
					the emergency fund should be kept in savings account for
					easy access. An emergency fund can turn a crisis into a mere
					inconvenience.
				</p>
				<br />
				<h3>SYSTEMATIC INVESTMENT PLANS (SIPs)</h3>
				<p>
					A Systematic Investment Plan is an instrument for investing
					a fixed amount at regular intervals in an asset class. This
					will gradually increase the corpus and at the same time
					compounding will work its magic as we discussed earlier. It
					will also inculcate a financial discipline. Another benefit
					is Rupee cost averaging. It simply means whenever markets
					are low you will gain more units and whenever markets are
					high you will gain fewer units. So, over the period of time,
					the cost of holding the units averages out. You can start
					SIP with as low as Rs. 500 or even Rs. 100 in some cases!
				</p>
				<br />
				<h3>POWER OF COMPOUNDING</h3>
					<div class="quote">
                        <p><em 
						>“Compound interest is the eighth wonder of the world.
						He who understands it earns it and he who doesn’t pays
						it.”
					</em></p>
                    </div>
                    <p>
					The word compounding means that the initial returns or
					interest that you earned on investment becomes part of the
					invested capital or principle. Compounding takes place when
					the returns or interest generated on the principal amount in
					the first period is added back to the principal amount in
					order to calculate the interest for the following periods.
					Thus, it creates a chain reaction by generating returns on
					the returns as long as your money remains invested in the
					financial instrument.
                    </p>
                    
                    <h5>• HOW DOES IT HELP IN WEALTH ACCUMULATION?</h5>
                    <p>The biggest thing that investors should appreciate in compounding is the value of the time it requires. As your returns or interests themselves start earning, the profit on your investment starts piling up at a much faster pace
                    For example, the growth of Rs. 10 Lakhs over 20 years if interest paid @10% per annum.
                    </p> 
                    <!-- <table>
                        <tr>
                            <td>Years</td>
                            <td>fdfdd</td>
                        </tr>
                        <tr>
                            <td>Years</td>
                            <td>fdfdd</td>
                        </tr>
                        <tr>
                            <td>Years</td>
                            <td>fdfdd</td>
                        </tr>
                    </table> -->
                    
                    <img class="table-img" src="./table.png" alt="">
                    <br>
                    <br>
                    <p>
                        In the table above, we can see that ₹10 lakhs invested over periods of 5, 10, 15, 20, 25 and 30 years translates into maturity amounts ranging from ₹16.1 lakhs after 5 years to ₹1.745 crores after 30 years period. 
                        The compounding effect is clearly visible as the extra amount earned in each of the 5 years is exponentially increasing from ₹6.1 lakhs in the first 5 years to ₹9.8 lakhs in the next 5 years’ time. 
                        This increases to ₹66.1 lakhs between the 25th and the 30th year.</p>
				    </p>
                    <p>
                        What investment lesson he gets from above example is that someone who saves his/her capital amount for 30 years earns over 17 times the capital compared to someone who saves for 20 years and earns only 7 times the capital and so on.
                    </p>
                    <br>
                    <h5>• 3 KEY RULES TO GET BENEFIT FROM COMPOUNDING</h5>
                    <p>
                        1] STARTING EARLY - There is nothing like starting early to make the most of compounding. If you start investing from the time you start earning, it will make a solid base for you that will enable your wealth to grow further over a period of time.
                        <br>
                        2] DISCIPLINE - If you wish to create a healthy portfolio, it is very important that you define your financial goals and be regular in your investments. Regardless of how less you earn, knowing what your priority is and understanding how being disciplined now would pay off later, will help you develop the habit to keep money aside for investing.
                        <br>
                        3] BE PATIENT - A lot of us wish for quick returns and not realize that it is the long-term investments that really powerfully reap from the concept of compounding. You will have to allow your investment to grow at its own pace without meddling with it from time to time. Years of dedicated investment on your part will render a strong and healthy lump sum capital for you at the end.
                    </p>
                    <h5>• BOTTOM LINE</h5>
                    <p>
                      Compounding simply means the interest earned on interest which leads to substantial growth in investments and savings over the course of time. The earlier you start investing, the greater will be the benefit of compounding.
            
                    </p>
                    <p>
                         Wealth isn't swanky cars and expensive gadgets, but systematic building of your assets and money when you're young. Stay Invested and reap the benefits!
                    </p>
				<br />
				<br />
				<h5>Happy Investing :)</h5>
			</div>`,
		heading: "03 PERSONAL FINANCE",
		body: `Personal finance is about meeting personal
								financial goals, whether it’s having enough for
								short-term financial needs, planning for
								retirement,etc. It depends on your income,
								expenses, living requirements, goals and coming
								up with a plan to fulfill those needs within
								your financial constraints. Click to read the
								whole article :)`,
	},
	{
		content: "",
		heading: "04 DEMYSTIFYING JARGONS",
		body: `Stock markets are full of jargons. Demystifying
								them is an important part going forward with
								investing. Here in we tried to explain some of
								the jargons to make it easy for you. Click to
								read the whole article :)`,
	},
];

class Learn extends React.Component {
	render() {
		return (
			<>
				<div class="read">
					<div class="container">
						<div class="row">
							{KuchBhi.map((card) => (
                                    <Card1 heading = {card.heading}
                                    body={card.body}
                                    content={card.content}>
                                    </Card1>
                                    ))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

// function Learn() {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }

//   return <div>
//     <input
//       type="button"
//       value="Click to Open Popup"
//       onClick={togglePopup}
//     />
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     {isOpen && <Popup
//       content={<>
//         <b>Design your Popup</b>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <button<Card1 button</button>
//       </>}
//       handleClose={togglePopup}
//     />}
//   </div>

// }

export default Learn;
