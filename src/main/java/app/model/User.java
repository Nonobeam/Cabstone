package app.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.print.DocFlavor;

@Entity
public class User { //id

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	protected String name;
	protected Integer age;
	protected String mail;
	protected String code = "";

	public User(){

	}

	public User(String name, Integer age, String mail) {
		this.name = name;
		this.age = age;
		this.mail = mail;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public void extractCode(String mail) {
		int startIndex = mail.indexOf('S');
		if (startIndex != -1 && startIndex + 8 <= mail.length()) {
			code = mail.substring(startIndex, startIndex + 8);
		}

	}

}