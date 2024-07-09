const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts:[],
			contact:{},
			contactToDelete:{}
		},
		actions: {
			seeContact: (contact) => {
				setStore({contact:contact})
			},

			setContactToDelete: (contact) => {
				setStore({contactToDelete:contact})

			},

			getAllContacts: () =>{
				fetch ('https://playground.4geeks.com/contact/agendas/Ruperth', {
					method: "GET",
				})
				.then((response)=> {
					if (response.status === 404) {
						createAgenda();
					}
					return response.json()
				})
				.then((data)=>{
					setStore({contacts:data.contacts});})
				.catch((error)=>{
					console.log(error)}
				)
		
			},

			createAgenda: () =>{
			
				fetch ('https://playground.4geeks.com/contact/agendas/Ruperth', {
					method: "POST",
					headers: {
						"content-type": "application/json"
					}
				})
				.then((response)=>{

					return response.json()})
				.then((data)=>{

					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},

			createContact: (fullName,email,phone,address) =>{
			
			
				fetch ('https://playground.4geeks.com/contact/agendas/Ruperth/contacts', {
					method: "POST",
					body: JSON.stringify(				
						{
						"name": fullName,
						"phone":phone,
						"email": email,
						"address":address
						
					}),
					headers: {
						"content-type": "application/json"
					}
				})
				.then((response)=>{

					return response.json()})
				.then((data)=>{
					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},

			deleteContact: (id) =>{
				
			
				fetch ('https://playground.4geeks.com/contact/agendas/Ruperth/contacts/'+id, {
					method: "DELETE",
					headers: {
						"content-type": "application/json"
					}
				})
				.then((response)=>{

					return response.json()})
				.then((data)=>{
					getAllContacts();
					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},

			editContact: (fullName,email,phone,address,id) =>{
				console.log(fullName,email,address,phone,id);
			
				fetch ('https://playground.4geeks.com/contact/agendas/Ruperth/contacts/'+id, {
					method: "PUT",
					body: JSON.stringify(				
						{
						"name": fullName,
						"phone":phone,
						"email": email,
						"address":address
						
					}),
					headers: {
						"content-type": "application/json"
					}
				})
				.then((response)=>{

					return response.json()})
				.then((data)=>{
					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},



			changeColor: (index, color) => {
			
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
