export default function DaRules (): JSX.Element {
    return (
        <div className="rules-inner-container">
            <h4>Da Rules</h4>
            <div>
                <ul>
                    Objectives & Rules
                    <li>
                        To be the first player to complete a canasta and discard all the cards in their hand
                    </li>
                    <li>
                        Each turn a player will pick up a card from either the draw pile or the discard pile*. They can decide to fulfill the meld by placing sets of cards down in their zone, place any additional cards in their hand on any existing piles in their zone to get canastas *only if a meld has been reached* or hold their cards for later. They then discard a card to conclude their turn
                    </li>
                    <li>
                        Until a canasta has been made, a player is unable to discard their final card in their hand
                    </li>
                    <li>
                        A canasta is defined as a set of 7 or more cards of the same number *or with 1-3 wilds* that have been placed down in a players zone to reach or after reaching the meld
                    </li>
                    <li>
                        No canasta may have more than 3 wilds *2s or Jokers*
                    </li>
                    <li>
                        The meld is defined by a pre-determined number set before the round that each player must reach before taking cards from the discard pile or placing any cards in their zone. For example 50, 90, or 120 points total
                    </li>
                    <li>
                        Before the meld has reached, players are initially unable to pick cards up from the discard pile, only doing so if they intend to place enough cards down in their zone with enough points to reach the meld requirement with only the top card and the cards in their hand
                    </li>
                    <li>
                        To fulfill the meld, at least 1 set *or multiple sets* of the same card 3 or more cards *or 2 cards with a wild* must be placed in your zone totalling to the meld number
                    </li>
                    <li>
                        After the reach meld is reached, players may take the discard pile as their draw card, but must use the top card of the pile on an existening set of the same number in their zone or to create a new set of 3 cards of that number before taking the rest of the pile
                    </li>
                    <li>
                        If a player wants to avoid give the discard pile to another player they may discard a valuable wild card *2 or Joker* to freeze the discard pile
                    </li>
                    <li>
                        If the deck is frozen, players may not pick up the discard pile based upon the existing piles/sets they have in their zone. The frozen discard pile can only be taken if the player has 2 of the same non-wild cards in their hand as the top card of the pile
                    </li>
                    <li>
                        Upon 1 player discarding their final card, also known as *going out*, the remaining cards in each other players hand with be subtracted from their point total for the round
                    </li>
                    <li>
                        The player who goes out also gains additional points for the manner in which they did it*
                    </li>
                    <li>
                        The number of rounds played is up to the players, the winner is the player with the highest number of points at the end of the decided rounds
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    Point Values
                    <li>
                        Cards #4-7 = 5 pts each
                    </li>
                    <li>
                        Cards #8-K = 10 pts each
                    </li>
                    <li>
                        Cards #2 or A = 20 pts each
                    </li>
                    <li>
                        Jokers = 50 pts each 
                    </li>
                    <li>
                        Red 3's = 100 pts each
                    </li>
                    <li>
                        Black canastas *any canasta using 1-3 wild cards* = 
                    </li>
                </ul> 
            </div>
            <ul>
                Specialty cards
                <li>
                    #2 or Joker Wild cards can Freeze the deck or be added to an exisiting pile of any number set
                </li>
                <li>
                    Black #3 are cards that can be discarded and never picked up from the discard pile
                </li>
                <li>
                    Each Red #3 card is automatically placed face up on the field as soon as the player's 1st turn starts. Addtional cards are taken from the draw pile based on how many Red 3s are placed.
                </li>
            </ul>
            <ul>
                Additional Rules & Tips
                <li>
                    If a player is unable to reach the meld before the round ends and has any red #3's in their zone, they subtract 100pts for each instead of gaining 100pts
                </li>
                
                <li>
                    Players may hold on to their wild cards in an attempt to make a wild card canasta, which rewards the player with a high # of points
                </li>
            </ul>
        </div>
    )
}