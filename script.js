// On initialise Web3.js pour la connexion à Metamask et Polygon
if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    const paymentButton = document.getElementById('payBtn');

    paymentButton.addEventListener('click', async () => {
        try {
            // Demander la connexion Metamask
            await ethereum.request({ method: 'eth_requestAccounts' });

            // Adresse de destination (pour recevoir le paiement)
            const recipient = '0xAdresseDeVotrePortefeuillePolygon';  // Change cette adresse par la vôtre
            const amountInMATIC = web3.utils.toWei('0.1', 'ether');  // 0.1 MATIC (exemple)

            // Effectuer le paiement
            const transactionParameters = {
                to: recipient,
                from: ethereum.selectedAddress,
                value: amountInMATIC,
            };

            // Envoi de la transaction
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            alert('Paiement effectué avec succès ! Votre annonce sera bientôt affichée.');
        } catch (error) {
            console.error(error);
            alert('Erreur lors du paiement. Assurez-vous que Metamask est connecté.');
        }
    });
} else {
    alert('Veuillez installer Metamask pour effectuer un paiement.');
}
