<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="style.css">
		<title>CS230 Assignment 3 - Sean Kelly</title>
	</head>
<body>

 <div class="header">

	<section id="table_container">

	<table id="input_data_table" border="0" text-align="left">
		<tr>
		    <th>ID</th>
		    <th>Creator</th>
				<th>Title</th>
				<th>Type</th>
				<th>Identifier</th>
				<th>Publication Date</th>
				<th>Language</th>
				<th>Description</th>
  		</tr>
		 <?php
		 $servername = "localhost";
		 $username = "root";
		 $password = "bollux39";
		 $dbname = "cs230";
		 ini_set('display_errors', 1);

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		}
		$sql = "SELECT id, creator, title, type, identifier, dates, language, description FROM eBook_MetaData;";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) { ?>
			<tr>
				<td><?php echo $row['id']; ?></td>
				<td><?php echo $row['creator']; ?></td>
				<td><?php echo $row['title']; ?></td>
				<td><?php echo $row['type']; ?></td>
				<td><?php echo $row['identifier']; ?></td>
				<td><?php echo $row['dates']; ?></td>
				<td><?php echo $row['language']; ?></td>
				<td id="des_t"><?php echo $row['description']; ?></td>
			</tr>


		   <?php }
		}
		$conn->close();
		?>
	<br><br>
	</table>
	</section>

	</div>


		<div id="grid">

		  <div>

				<section id="input_container">

							<table id="input_data_delete_row">
                  <tr id= "delete_table">
                    <td class="header_spacing" colspan="" class="Input_table">
                      <h3 align="center"> Select ID to Delete </h3>
                    </td>
                  </tr>
									<tr id="header_spacing2">
										<td>
											<form action ="delete.php" method="POST">
												<br>ID you wish to delete: <br><br>
												<input class="input_box2" type="text" name="ID" placeholder="id you wish to delete"><br><br>
												<input class="btn" type="submit" value="delete">
											</form>
										</td>
									</tr>
                  <tr>

							</table>

				</section>


				<section id="input_container">


					<section id="table_container2">
						<table id="input_data2">

							<tr>
								<td class="header_spacing" colspan="2" class="Input_table">
										<h3 align="center">Input Row Data</h3>
								</td>
		<form action="CR.php" method="POST">
							</tr>
							<tr>
								<td class="left_cells">
									Creator

								</td>
								<td class="cells">
									<input type="text" name="creator" placeholder="creator" class="input_box">
								</td>
							</tr>

							<tr>
								<td class="left_cells">
									Title

								</td>
								<td class="cells">
									<input type="text" name="title" placeholder="title" class="input_box">
								</td>
							</tr>

							<tr>
								<td class="left_cells">
									Type
								</td>
								<td class="cells">
									<select type="text" class="lang" name="type">
										<option value="Young Adult">Young Adult</option>
										<option value="Fantasy">Fantasy</option>
										<option value="Romance">Romance</option>
										<option value="Triller">Triller</option>
									</select>
								</td>
							</tr>

							<tr>
								<td class="left_cells">
									Identifier
								</td>
								<td class="cells">
									<input type="text" name="identifier" placeholder="identifier" class="input_box">
								</td>
							</tr>

							<tr>
								<td class="left_cells">
										Publication Date
								</td>
								<td class="cells">
										<input type="date" name="dates" class="input_box">
								</td>
							</tr>

							<tr>
								<td class="left_cells">
									Language

								</td>
									<td class="cells">
										<select type="text" class="lang" name="language">
											<option value="English">en-GB(English)</option>
											<option value="French">fr-FR(French)</option>
											<option value="Spanish">es-ES(Spanish)</option>
											<option value="German">de-DE(German)</option>
											<option value="Irish">ga-IE(Irish)</option>
											<option value="Japanese">ja(Japanese)</option>
											<option value="Portuguese">pt-PT(Portuguese)</option>
										</select>
								</td>
							</tr>

							<tr>
								<td>
									Description
								</td>
								<td>
									<textarea type="textbox" name="description" placeholder="description" class="input_textbox"></textarea>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<input class="btn" type="submit" name="action" value="submit">
								</td>
							</tr>
							</form>
						</table>

					</section>

			</section>
		</div>
	<div>

			<div class="content_left">
			<form action="CR.php" method="POST">
			<section id="input_container2">

				<table id="input_data2">
					<tr>
						<td class="header_spacing" colspan="2" class="Input_table">
						<h3 align="center">Update Row</h3>
						</td>
					</tr>

						<tr>
							<td>
								ID you want to update
							</td>
							<td>
								<input class="input_box" type = "number" name = "id" placeholder="id">
							</td>
						</tr>

						<tr>
							<td class="left_cells">
								Creator

							</td>
							<td class="cells">
								<input type="text" name="creator" placeholder="creator" class="input_box">
							</td>
						</tr>

						<tr>
							<td class="left_cells">
								Title

							</td>
							<td class="cells">
								<input type="text" name="title" placeholder="title" class="input_box">
							</td>
						</tr>

						<tr>
							<td class="left_cells">
								Type
							</td>
							<td class="cells">
								<select type="text" class="lang" name="type">
									<option value="Young Adult">Young Adult</option>
									<option value="Fantasy">Fantasy</option>
									<option value="Romance">Romance</option>
									<option value="Triller">Triller</option>
								</select>
							</td>
						</tr>

						<tr>
							<td class="left_cells">
								Identifier
							</td>
							<td class="cells">
								<input type="text" name="identifier" placeholder="identifier" class="input_box">
							</td>
						</tr>

						<tr>
							<td class="left_cells">
									Publication Date
							</td>
							<td class="cells">
									<input type="date" name="dates" class="input_box">
							</td>
						</tr>

						<tr>
							<td class="left_cells">
								Language

							</td>
								<td class="cells">
									<select type="text" class="lang" name="language">
										<option value="English">en-GB(English)</option>
										<option value="French">fr-FR(French)</option>
										<option value="Spanish">es-ES(Spanish)</option>
										<option value="German">de-DE(German)</option>
										<option value="Irish">ga-IE(Irish)</option>
										<option value="Japanese">ja(Japanese)</option>
										<option value="Portuguese">pt-PT(Portuguese)</option>
									</select>
							</td>
						</tr>

						<tr>
							<td id="des">
								Description
							</td>
							<td>
									<textarea type="textbox" name="description" placeholder="description" class="input_textbox"></textarea>
							</td>
						</tr>
						<tr>
						<tr>
							<td colspan="2">
								<input class="btn" type="submit" name="action" value="update">
							</td>
						</tr>
					</form>
				</table>
				</section>

			</div>

	</div>
		</div>

</body>

</html>
