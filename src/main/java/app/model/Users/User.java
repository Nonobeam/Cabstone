package app.model.Users;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "CommunityMember")
public class User { //id
//	public enum Provider{
//		LOCAL
//		, GOOGLE
//	}

//	@Enumerated(EnumType.STRING)
//	private Provider provider;
//
//	public Provider getProvider() {
//		return provider;
//	}
//
//	public void setProvider(Provider provider) {
//		this.provider = provider;
//	}

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	protected String name;
	protected Integer age;
	protected String mail;
	protected String code = "";

	protected boolean role;

	protected boolean accountNonExpired;

	protected boolean accountNonLocked;

	@Override
	public String toString() {
		return "User{" +
				"name='" + name + '\'' +
				", age=" + age +
				", mail='" + mail + '\'' +
				", code='" + code + '\'' +
				", role=" + role +
				", accountNonExpired=" + accountNonExpired +
				", accountNonLocked=" + accountNonLocked +
				'}';
	}
}