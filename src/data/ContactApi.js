class ContactApi {


    static getContact() {
        const url = `/api/self/register`;
        return fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(response => {
            return response
        }).catch(error => {
            return error;
        });
    }

    static deleteContact(nin) {
        const url = `/api/self/register`;
        return fetch(url, {
            method: 'DELETE',
            credentials: 'same-origin',
        }).then(response => {
            return response
        }).catch(error => {
            return error;
        });
    }

    static createContact(contact) {
        const request = new Request(`/api/self/register`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(contact)
        });

        return fetch(request)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    static updateContact(contact) {
        const request = new Request(`/api/self/register`, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(contact)
        });

        return fetch(request)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

}

export default ContactApi;
